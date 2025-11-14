pipeline {
    agent{
            docker{
                image 'node:18-alpine'
                reuseNode true
            }
        }
    environment {
        NETLIFY_SITE_ID = '9c5b80bb-f247-477a-b532-882517372c59'
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
        stage('E2E') {
            agent {
                docker {
                    image 'mcr.microsoft.com/playwright:v1.39.0-jammy'
                    reuseNode true
                }
            }
            steps {
                sh '''
                    npm install serve
                    node_modules/.bin/serve -s build &
                    sleep 10
                    npx playwright test  --reporter=html
                '''
            }
            post {
                always {
                    publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: false, reportDir: 'playwright-report', reportFiles: 'index.html', reportName: 'Playwright HTML Report', reportTitles: '', useWrapperFileDirectly: true])
                }
            }
        }
        stage('Deploy') {
            steps {
                sh '''
                    npm install netlify-cli@20.1.1
                    node_modules/.bin/netlify --version
                    echo "Deploying to production. Site ID: $NETLIFY_SITE_ID"
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
