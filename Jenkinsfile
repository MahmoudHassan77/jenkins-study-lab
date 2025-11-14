pipeline {
    agent{
            docker{
                image 'node:18-alpine'
                reuseNode true
            }
        }
    environment {
        NETLIFY_SITE_ID = '9c5b80bb-f247-477a-b532-882517372c59'
        NETLIFY_AUTH_TOKEN = credentials('netlify-token')
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh '''
                    npm ci --legacy-peer-deps
                '''
            }
        }
        stage('Lint') {
            steps {
                sh '''
                    npm run lint || true
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
        stage('Build') {
            steps {
                sh '''
                    npm run build
                '''
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                    npm install netlify-cli --legacy-peer-deps
                    node_modules/.bin/netlify status
                    node_modules/.bin/netlify deploy --dir=build --prod
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
