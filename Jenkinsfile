node {     
      def app      
      stage('Clone deposit') {                
             
            checkout scm     
      }     
      stage('Construire une image') {          
       
            app = docker.build("najia/front-app")     
       }     
      stage('Image de test') {           
            app.inside {             
             
             sh 'echo "Tests réussis"'         
            }     
        }     
       stage('Push image') { 
                                                  docker.withRegistry('https://index.docker.io/v1/', '6c924da8-3b04-40fe-9fea-575410740bf8') {            
       app.push("${env.BUILD_NUMBER}")             
       app.push("latest")         
              }     
           } 
        }
