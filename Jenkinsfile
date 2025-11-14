pipeline {
    agent{
            docker{
                image 'node:18-alpine'
                reuseNode true
            }
        }

    stages {
        stage('Build') {
            steps {
                sh '''
                    ls -la
                    node --version
                    npm --version
                    npm ci --legacy-peer-deps
                    npm run build
                    ls -la
                '''
            }
        }
        stage('Test') {
            steps {
                sh '''
                   mkdir -p test-results
                   test -f dist/index.html
                   npm run test:ci
                '''
            }
        }
    }
    post {
        always {
            junit 'test-results/junit.xml'
        }
    }
}
