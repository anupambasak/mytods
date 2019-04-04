pipeline {
  agent {
    node {
      label 'mynode'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
  }
}