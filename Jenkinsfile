pipeline{
  stages{
stage('git checkout')
{
git branch: 'main', url: 'https://github.com/CBI-DevOps-PFE/frontend.git'
}
}
       
        stage('Install dependencies') {
            steps {
              
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
            
                sh 'npm test' 
            }
        }
       
        stage('Deploy') {
            steps {
               
                PM2
               
                sh 'pm2 deploy ecosystem.json production'
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
