pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                sh 'env'
                sh 'echo try to run node'
                sh 'node -e "console.log(process.version)"'
            }
        }
    }
}