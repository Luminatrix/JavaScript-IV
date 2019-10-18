// CODE here for your Lambda Classes

class Person{
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location
    }
    speak(){
        return `Hello my name is ${this.name} and I am from ${this.location}`
    }
}
class Instructor extends Person{
constructor(attributes){
super(attributes);
this.specialty = attributes.specialty,
this.subject = attributes.subject,
this.favLanguage = attributes.favLanguage,
this.catchPhrase = attributes.catchPhrase
} 
demo(){
  return `Today we are learning about ${this.subject}`
}
grade(student, subject){
  return `${student.name} receives a perfect score on ${this.subject}`

}
}
class Student extends Person{
constructor(attributes){
    super (attributes);
    this.previousBackground = attributes.previousBackground,
    this.className = attributes.className,
    this.favoriteSubjects = attributes.className
}
listsSubjects(){
  favoriteSubjects.forEach(function(item, index, array) {
    console.log(item, index);
  });
}
PRAssignment (){
 return `${student.name} has submitted a PR for ${this.subject}`
}
sprintChallenge (){
  return `${student.name} has begun sprint challenge on ${subject}`
}
standup (web25){
  return `${this.name} announces to ${channel}, @channel standy times!`
}
debugsCode (student){
  `${name} debugs ${student.name}'s code on ${subject}`
}  
}





class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName,
        this.favInstructor = attributes.favInstructor,
    }
}


const Fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    subject: 'computers101',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

  const Sarah = new Instructor({
    name: 'Sarah',
    location: 'Mars',
    age: 28,
    favLanguage: 'C++',
    subject: 'webdev',
    specialty: 'Back-end',
    catchPhrase: `don't worry be happy`
  });


  const Lisa = new Instructor({
    name: 'Lisa',
    location: 'Miami',
    age: 40,
    favLanguage: 'JavaScript',
    subject: 'IOSdev',
    specialty: 'Front-end',
    catchPhrase: `eyes on the prize`
  });

  const Stella = new Student ({
    name: 'Stella',
    location: 'Oakland',
    age: 32,
    previousBackground: 'tech',
    className: 'Web25',
    favoriteSubjects: ['React', 'Magic', 'computer science']
  })

  const Luna = new Student ({
    name: 'Luna',
    location: 'Baltimore',
    age: 22,
    previousBackground: 'tech',
    className: 'Web25',
    favoriteSubjects: ['Python, Data Science', 'herbalism']
  })

  const Phenix = new Student ({
    name: 'Phenix',
    location: 'London',
    age: 42,
    previousBackground: 'tech',
    className: 'Web25',
    favoriteSubjects: ['C++', 'HTML', 'wizardry']
  })

  const Arnold = new ProjectManager({
    name: 'Arnold',
    location: 'New York',
    age: 27,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    gradClassName: `C123`,
    favInstructor: `Lisa`
  });

  const Gerald = new ProjectManager({
    name: 'Gerald',
    location: 'New York',
    age: 67,
    favLanguage: 'JavaScript',
    specialty: 'UX',
    catchPhrase: `Peace up A town`,
    gradClassName: `C123`,
    favInstructor: `Lisa`
  });