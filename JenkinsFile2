pipeline {
  agent {
    label 'crew-appliance'
  }
 
  environment {
    SERVICE_NAME = 'auth0-appliance-configuration-ui'
    RELEASE_FOLDER = "artifacts/${SERVICE_NAME}"
    S3_CP_ACL = 'bucket-owner-full-control'
    TRIGGER_QUEUE_NAME = 'https://sqs.us-west-2.amazonaws.com/010616021751/prod-ci-us-west-2.fifo'
    TRIGGER_QUEUE_REGION = 'us-west-2'
    TRIGGER_QUEUE_TOPIC = 'releases-trigger'
    TRIGGER_QUEUE_TARGET_JOB = 'releases-hybrid'
  }
 
  options {
    timeout(time: 10, unit: 'MINUTES') // Global timeout for the job. Recommended to make the job fail if it's taking too long
  }
 
  parameters { // Job parameters that need to be supplied when the job is run. If they have a default value they won't be required
    string(name: 'MajorVersion', defaultValue: '1', description: 'Number for the Major version in MAJOR.MINOR.PATCH (SemVer)')
    string(name: 'S3Bucket', defaultValue: "prod-ci-us-west-2", description: 'Target S3 Bucket')
    string(name: 'SlackTarget', defaultValue: '#appliance-testing', description: 'Target Slack Channel for notifications')
  }
 
  stages {
    stage('SharedLibs') { // Required. Stage to load the Auth0 shared library for Jenkinsfile
      steps {
        library identifier: 'auth0-jenkins-pipelines-library@master', retriever: modernSCM(
          [$class: 'GitSCMSource',
          remote: 'git@github.com:auth0/auth0-jenkins-pipelines-library.git',
          credentialsId: 'auth0extensions-ssh-key'])
      }
    }
    stage('Build') { // Build steps such as 'npm install' or launching containers
      steps {
        // Jenkins slaves don't share SSH keys with the master
        // Use the 'sshagent' step if you need to access auth0 GH private repositories within the pipeline
        sshagent(['auth0extensions-ssh-key']) {
          sh 'npm install'
        }
        // Find more examples of what to add here at https://github.com/auth0/auth0-users/blob/master/Jenkinsfile#L41
      }
    }
    stage('Test') { // Testing steps such as running the linter, testing the Shrinkwrap file or running unit tests
      steps {
        script {
          try {
            sh 'npm run test'
            githubNotify context: 'jenkinsfile/auth0/tests', description: 'Tests passed', status: 'SUCCESS'
          } catch (error) {
            githubNotify context: 'jenkinsfile/auth0/tests', description: 'Tests failed', status: 'FAILURE'
            throw error
          }
        }
        // Find more examples of what to add here at https://github.com/auth0/auth0-users/blob/master/Jenkinsfile#L70
      }
    }
  }
   
  post {
    always { // Steps that need to run regardless of the job status, such as test results publishing, Slack notifications or dependencies cleanup
      // Publish test results
      junit allowEmptyResults: true, testResults: 'junit.xml' // Requires 'JUnit' Jenkins plugin installed
 
      script {
        String additionalMessage = '';
        if (env.BRANCH_NAME.startsWith("PR-")) {
          additionalMessage += "\nPR: ${env.CHANGE_URL}\nTitle: ${env.CHANGE_TITLE}\nAuthor: ${env.CHANGE_AUTHOR}";
        }
        additionalMessage += "\n" + junitResultsToString('junit.xml');
 
        notifySlack(params.SlackTarget, additionalMessage);
      }
 
      // Find more examples of what to add here at https://github.com/auth0/auth0-users/blob/master/Jenkinsfile#L191
    }
    cleanup {
      // Recommended to clean the workspace after every run
      deleteDir()
    }
  }
}
