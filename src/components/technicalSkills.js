import React from "react";

const tableContent = [
  { skill: "Programming Language", description: "Core Java, SQL, PL/SQL" },
  {
    skill: "Web Technologies",
    description:
      "JavaScript, jQuery, AJAX, XML, XHTML, CSS, SASS, HTML, AngularJS, Angular 4,6, React.js, Node.js, Express.js, Ext JS, backbone JS, JSP",
  },
  {
    skill: "Java/J2EE Technologies",
    description:
      "Servlets, JSP, JSTL, JDBC, JMS, JNDI, RMI, EJB, Swing, AWT, Multi-threading, JDK 1.8",
  },
  {
    skill: "Java Frameworks",
    description: "Spring MVC, Struts 2.0, JSF",
  },
  {
    skill: "Application/Web Servers",
    description: "Jboss, Tomcat, WebLogic, IBM WebSphere",
  },
  {
    skill: "ORM Frameworks",
    description: "Hibernate, JSF, IBATIS",
  },
  {
    skill: "Spring Framework",
    description:
      "Spring IOC, Spring Batch, Spring Boot, Spring Security, Microservices",
  },
  {
    skill: "Database Server",
    description: "Oracle,DB2, SQL Server, MySQL, RDBMS, MongoDB, Cassandra",
  },
  {
    skill: "IDE",
    description: "Visual Studio Code,Intellij,Eclipse, NetBeans, Atom",
  },
  {
    skill: "Web Services",
    description:
      "REST, SOAP, JAX-WS, JAX-RPC, JAX-RS, WSDL, Axis2, UDDI, Apache CXF",
  },
  {
    skill: "Version Control",
    description: "GIT, CVS, SVN, Relational Clear case",
  },
  {
    skill: "Build Tools",
    description: "ANT, Maven, Gradle",
  },
  {
    skill: "Methodologies",
    description:
      "Agile, Scrum, Water-Fall, Rapid Application Development,Test Driven development",
  },
  {
    skill: "Modelling Tools",
    description: "Microsoft Visio, Rational Rose ",
  },
  {
    skill: "Operating System",
    description: "Windows, Mac, Linux, UNIX",
  },
  {
    skill: "Testing & logging Node",
    description:
      "Junit, Cypress, Log4J, SoapUI, Test NG, easy mock and power mock. Mockito, Selenium, Jenkins, Docker",
  },
  {
    skill: "Cloud Developments",
    description: "AWS, EC2, S3, Elastic",
  },
];

const SkillsTable = () => (
  <div className="table">
    {tableContent.map((item, index) => (
      <div key={index} className="row">
        <div className="columnLeft">{item.skill}</div>
        <div className="columnRight">{item.description}</div>
      </div>
    ))}
  </div>
);

const TechnicalSkills = () => {
  return (
    <div>
      <h3 className="leftHeader">SKILLS: </h3>
      <SkillsTable />
    </div>
  );
};

export default TechnicalSkills;
