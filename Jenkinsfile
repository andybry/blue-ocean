pipeline {
    agent {
        docker 'node:6.3'
    }
    environment {
        secret_key = credentials('acc45ea6-43ae-41f1-8352-2d4ce46835fc')
    }
    stages {
        stage('build') {
            steps {
                sh 'env'
            }
        }
    }
}