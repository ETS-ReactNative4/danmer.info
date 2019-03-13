pipeline {
  agent {
	docker { 
		image 'node:10-alpine'
		args '-p 20001-20100:3000'
	}
  }

  stages {
    stage('Build') {
      steps {
        sh 'npm run build'
      }
    }
    stage('Deploy') {
      steps {
		withAWS(region:'us-east-1a', credentials:'Jenkins') {
        	s3Delete(path: '**/*', bucket: 'danmer.info')
        	s3Upload(bucket: 'danmer.info', path: '**/*', workingDir: 'build')
		}
      }
    }
  }
}
