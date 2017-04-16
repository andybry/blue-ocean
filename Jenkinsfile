pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'env'
                sh 'try to run node'
                sh 'node -e "console.log(process.version)"'
            }
        }
    }
}