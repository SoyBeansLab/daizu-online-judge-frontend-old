/* eslint-disable */
module.exports = (client) => require('axios-mock-server')([
  {
    path: '/notifications',
    methods: require('./notifications/index')
  },
  {
    path: '/languages',
    methods: require('./languages/index')
  },
  {
    path: '/contests',
    methods: require('./contests/index')
  },
  {
    path: '/contests/_contest_id/submits',
    methods: require('./contests/_contest_id/submits/index')
  },
  {
    path: '/contests/_contest_id/submits/_submits_id',
    methods: require('./contests/_contest_id/submits/_submits_id/index')
  },
  {
    path: '/contests/_contest_id/registrations',
    methods: require('./contests/_contest_id/registrations/index')
  },
  {
    path: '/contests/_contest_id/ranking',
    methods: require('./contests/_contest_id/ranking/index')
  },
  {
    path: '/contests/_contest_id/problems',
    methods: require('./contests/_contest_id/problems/index')
  },
  {
    path: '/contests/_contest_id/problems/_problem_id',
    methods: require('./contests/_contest_id/problems/_problem_id/index')
  },
  {
    path: '/contests/_contest_id',
    methods: require('./contests/_contest_id/index')
  }
], client, '')
