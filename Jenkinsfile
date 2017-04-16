pipeline {
    agent any
    environment {
        secret_key = credentials('acc45ea6-43ae-41f1-8352-2d4ce46835fc')
    }
    stages {
        stage('build') {
            steps {
                sh 'echo doing build'
                sh 'env'
            }
        }
        stage('build 2') {
            steps {
                sh 'echo doing build 2'
            }
        }
        stage('test') {
            steps {
                sh 'echo doing test'
            }
        }
        stage('deploy') {
            steps {
                sh 'echo doing deploy'
            }
        }
    }
}