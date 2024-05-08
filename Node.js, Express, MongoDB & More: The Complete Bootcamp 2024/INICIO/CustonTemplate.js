

const fs = require("fs");

class TemplateEngine {
  constructor() {
    this.templateDir = {};
  }

  // Función para cargar una plantilla desde el sistema de archivos
  loadTemplate(templateName) {
    const templatesDir = "./templates/";
    try {
      // Lee el contenido de la plantilla desde el sistema de archivos
      const templateContent = fs.readFileSync(
        templatesDir + templateName + ".html",
        "utf8"
      );
      return templateContent;
    } catch (error) {
      console.error("Error al cargar la plantilla:", error);
      return null;
    }
  }
  // Función para parsear una plantilla
  parseTemplate(templateContent) {
    const tokens = [];
    const regex = /{%(.*?)%}/g;
    let match;
    while ((match = regex.exec(templateContent)) !== null) {
      tokens.push({
        type: "variable",
        value: match[1].trim(),
      });
    }
    return tokens;
  }

  processTemplate(templateData, templateStructure) {
    // Aquí puedes implementar la lógica para procesar la plantilla
    // y aplicar los datos dinámicos proporcionados
    // Retorna la plantilla procesada como una cadena de texto
  }

  renderTemplate() {
    // Aquí puedes implementar la lógica para renderizar la plantilla
  // en el formato deseado, como HTML, texto plano, etc.
  // Retorna la plantilla renderizada
  }
}


// Ejemplo de uso del motor de plantillas
/* const templateName = "mi_plantilla";
const templateContent = CustomTemplateEngine.loadTemplate(templateName);
const templateStructure = CustomTemplateEngine.parseTemplate(templateContent);
const templateData = { title: "Título de ejemplo", message: "Hola, mundo!" };
const processedTemplate = CustomTemplateEngine.processTemplate(
  templateData,
  templateStructure
);
const renderedTemplate = CustomTemplateEngine.renderTemplate(processedTemplate);

console.log(renderedTemplate); */

const myTemplate = new TemplateEngine();
const templateContent = myTemplate.loadTemplate("overview");
const templateStructure = myTemplate.parseTemplate(templateContent);
console.log(templateStructure);
