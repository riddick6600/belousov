module.exports = {
  apps : [{
    name: 'Next',
    script: 'npm start',
    instances: 1,
    autorestart: true,
    watch: true,
    env: {
      PORT: '80',
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};