pipeline {
    agent any
    environment {
        secret_key = credentials('acc45ea6-43ae-41f1-8352-2d4ce46835fc')
    }
    stages {
        stage('build') {
            steps {
                sh 'echo ${secret_key_USR} awk "{print toupper($0)}"'
            }
        }
    }
}