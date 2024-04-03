pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your/repository.git'
            }
        }

        stage('Build') {
            steps {
               
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
              
            }
        }

        stage('Deploy') {
            steps {
                //  Kubernetes manifests to deploy the application
                sh 'kubectl apply -f kubernetes-manifests/'
            }
        }
    }

    post {
        success {
            echo 'Build and deploy successful!'
        }
        failure {
            echo 'Build or deploy failed!'
        }
    }
}

          
 
