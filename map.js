

const friends = ["Rakib", "Sajib", "Rony", "Razib", "Sagor", "Borkot Ullah Blue"];

friends.map(friend => console.log("My Friend: " + friend));

const vaiBrother = ["Rakib Sheikh", "Sajib Molla", "Rony Khan", "Razib Talukder", "Sagor Molla", "Borkot Ullah Blue"];

const filter = vaiBrother.filter(vai => vai.length > 15)

console.log(filter);


const brothers = ["Rakib Sheikh", "Sajib Molla", "Rony Khan", "Razib Talukder", "Sagor Molla", "Borkot Ullah Blue"];

const vai = brothers.find(friend => friend[15])

console.log(vai);
