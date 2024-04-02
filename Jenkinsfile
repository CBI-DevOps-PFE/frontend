pipeline{
  stages{
stage('git checkout')
{
git branch: 'main', url: 'https://github.com/CBI-DevOps-PFE/frontend.git'
}
}
       
        stage('Install dependencies') {
            steps {
                // Install Node.js dependencies using npm or yarn
                sh 'npm install'
            }
        }
       
        stage('Build') {
            steps {
                
              
                sh 'npm run build' 
            }
        }
       
        stage('Test') {
            steps {
                // Run tests for the Node.js application
                sh 'npm test' 
            }
        }
       
        stage('Deploy') {
            steps {
                // Deploy the Node.js application
                // This step will depend on how you deploy your Node.js application
                PM2
               
                sh 'pm2 deploy ecosystem.json production'
            }
        }
    }
   
    post {
        success {
            // Send notification on success
            echo 'Build and deploy successful!'
        }
        failure {
            // Send notification on failure
            echo 'Build or deploy failed!'
        }
    }
}
