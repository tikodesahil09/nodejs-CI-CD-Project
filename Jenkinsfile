pipeline {
    agent any

    environment {
        HOME = '/var/lib/jenkins'
        PM2_HOME = '/var/lib/jenkins/.pm2'
        PATH = "/usr/local/bin:/usr/bin:/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/tikodesahil09/nodejs-CI-CD-Project.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Test') {
            steps {
                sh 'npm test'
            }
        }

        stage('Deploy with PM2') {
            steps {
                sh '''
                    which pm2
                    pm2 -v
                    pm2 delete nodeapp || true
                    pm2 start index.js --name nodeapp
                    pm2 save
                    pm2 list
                '''
            }
        }

        stage('Health Check') {
            steps {
                sh '''
                    sleep 5
                    curl http://localhost:3000
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully. App deployed on port 3000.'
        }
        failure {
            echo 'Pipeline failed. Please check the console output.'
        }
    }
}
