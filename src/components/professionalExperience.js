import React from 'react';

const list =[
    "Around  6+  years  of  experience  in  analysis, design, implementation of Object-Oriented Applications in Client/Server environments using Java/J2EE technologies and Implementation in Amazon Web Services (AWS) cloud and IT industry.", 
    "Used the best practices of SDLC as well as Agile/SCRUM methodologies.",
    "Proficient in working with HTML, CSS, Bootstrap, XML, AJAX, JavaScript, jQuery,  React Js,Angular 4.0, NodeJS.",
    "Proficiency in server-side Java development with exposure RESTful web services, AJAX web application.",
"Developed the Spring Features like Spring MVC, Spring DAO, Spring Boot, Spring Batch, Spring Security, Spring Integration, Spring Netflix.",
"Hands on experience in implementing SOA (Service Oriented Architecture) and web services such as SOAP and REST using WSDL, CXF2, JAX-WS and JAX-RS.",
"Developed Web applications to consume JSON response using callback functions.",
"Developed and designed web interfaces and layouts using JavaScript, HTML and CSS.",
"Very  good  experience  with Model2 (MVC) architecture and Jakarta Struts. Solid experience in using Jakarta Apache frameworks like Struts, Maven, ANT, JUnit and Log4J.",
"Experienced in frameworks like struts, JSF, spring, Spring Boot, Spring Security, Hibernate.",
"Developed & implemented MVC architectural Pattern using JSF Framework including JSP, Servlets, EJB.",
"Hands on experience in Amazon Web Services (AWS) provisioning and good knowledge of AWS services like EC2, S3, Elastic Beanstalk.",
"Experienced in Development, testing and deployment of enterprise applications on Windows & UNIX platforms using IDEs such as Eclipse, Rational Application Developer (RAD), NetBeans, IntelliJ.",
"Experience in creating Databases, Tables, Stored Procedure, DDL/DML Triggers, Views, User defined data types (UDT), Cursors, Functions, data dictionaries, and Indexes using T-SQL.",
"Experience in database development skills like MySQL, Oracle, SQL Server and NoSQL Databases like Cassandra, MongoDB.",
"Expertise in working on ANT, Maven, Log4j, Mockito, JMock, Testing.",
"Having knowledge on (JMS) MQ's like Rabbit MQ and Active MQ.",
"Upgraded Apache Tomcat in Production servers to latest version configured and tested successfully.",
"Experience in working with GIT and GIT Bash as the version control tools."
]
const ProficientExperience = ()  => {
   return(
  <div>
  <h3 className="leftHeader">
     PROFESSIONAL SUMMARY: 
  </h3>
   <ul>
   {list.map((item,index) =>  
     <li className="list">{item}</li>
   )}
   </ul>
    
 </div>
   );
};
export default ProficientExperience;