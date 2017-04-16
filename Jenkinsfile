pipeline {
    agent {
        docker 'node:6.3'
    }
    environment {
        npm_config_cache = '.npm'
        secret_key = credentials('GITHUB_TOKEN_AS_SECRET_TEXT')
    }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
            }
        }
        stage('run') {
            steps {
                sh 'node .'
            }
        }
    }
}