define(["underscore","backbone"],function(e,r){var n=r.Model.extend({url:"",formatServerDateTime:function(e){var r=e.toString().length;return 10==r?1e3*parseInt(e,10):parseInt(e,10)}});return n});