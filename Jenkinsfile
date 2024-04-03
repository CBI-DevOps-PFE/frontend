pipeline {
    agent any

    environment {
        DOCKER_REGISTRY_CREDENTIALS_ID = '6c924da8-3b04-40fe-9fea-575410740bf8' 
        DOCKER_IMAGE_NAME = 'front' 
        DOCKER_IMAGE_TAG = 'tagname'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/CBI-DevOps-PFE/frontend.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install' // Install dependencies if needed
                sh 'npm run build' // Build your React application
                // Build Docker image
                sh 'docker build -t $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG .'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test' // Run tests if needed
            }
        }

        stage('Deploy to Docker Registry') {
            steps {
                // Log in to Docker registry
                withCredentials([usernamePassword(credentialsId: DOCKER_REGISTRY_CREDENTIALS_ID, usernameVariable: 'bounajia', passwordVariable: 'najianajia1')]) {
                    sh 'docker login -u $DOCKER_USERNAME -p $DOCKER_PASSWORD'
                }
                // Push Docker image to registry
                sh 'docker push $DOCKER_IMAGE_NAME:$DOCKER_IMAGE_TAG'
            }
        }
    }

    post {
        success {
            echo 'Build and push successful!'
        }
        failure {
            echo 'Build or push failed!'
        }
    }
}
