pipeline {
     agent{
        docker{
            image 'mcr.microsoft.com/playwright:v1.62.1-jammy'
            args '-u root --entrypoint='
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
