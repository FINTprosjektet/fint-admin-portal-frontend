pipeline {
    agent {
        label 'docker'
    }
    stages {
        stage('Build') {
            steps {
                sh "docker build -t ${GIT_COMMIT} ."
            }
        }
        stage('Publish') {
            when { branch 'main' }
            steps {
                withDockerRegistry([credentialsId: 'fintlabsacr.azurecr.io', url: 'https://fintlabsacr.azurecr.io']) {
                    sh "docker tag ${GIT_COMMIT} fintlabsacr.azurecr.io/admin-portal-frontend:latest"
                    sh "docker push fintlabsacr.azurecr.io/admin-portal-frontend:latest"
                }
            }
        }
        stage('Build backend') {
            when { branch 'main' }
            steps {
                build job: 'FINTLabs/fint-admin-portal-backend/main', wait: false
            }
        }
    }
}
