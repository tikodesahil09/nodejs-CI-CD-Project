pipeline {
    agent any

    environment {
        HOME = '/var/lib/jenkins'
        PM2_HOME = '/var/lib/jenkins/.pm2'
        PATH = "/usr/bin:/usr/local/bin:${env.PATH}"
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
                    /usr/bin/pm2 delete nodeapp || true
                    /usr/bin/pm2 start index.js --name nodeapp
                    /usr/bin/pm2 save
                    /usr/bin/pm2 list
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
