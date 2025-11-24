pipeline {
    agent {
        docker {
            image 'node:18-alpine'
            reuseNode true
        }
    }

    stages {
        stage('Install Dependencies') {
            steps {
               sh 'npm ci --legacy-peer-deps'
            }
        }
        stage('Lint') {
            steps {
               sh 'npm run lint || true'
            }
        }
        stage('Test') {
            steps {
               sh '''
                    mkdir -p test-results
                    npm run test:ci
               '''
            }
        }
        stage('Build') {
            steps {
               sh 'npm run build'
            }
        }

    }
}