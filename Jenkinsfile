pipeline {
  agent {
	docker { 
		image 'node:lts-alpine"
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
        s3Delete(path: '**/*', bucket: 'danmer.info')
        s3Upload(bucket: 'danmer.info', path: '**/*', workingDir: 'build')
      }
    }
  }
}
