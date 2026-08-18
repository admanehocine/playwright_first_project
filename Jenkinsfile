pipeline {
     agent{
        docker{
            image 'playwright/chrome:playwright-1.56.1'
            args '--entrypoint='
        }
    }

    stages {
        stage('installation dependance') {
            steps {
                sh 'npm install'
            }
        }
        stage('LAncement de test') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
}
