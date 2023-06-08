from django.db import models
from datetime import datetime

class Task(models.Model):
    Nombre_Completo = models.CharField(max_length=200)
    Email = models.CharField(max_length=100)
    Fecha_De_Nacimiento = models.DateField(null=True, blank=True)
    Fecha_De_Creacion = models.DateField(auto_now_add=True)
    Numero_Documento = models.IntegerField()

    #formatear la fecha de nacimiento en un formato específico.
    @property
    def fecha_nacimiento_formatted(self):
        if self.Fecha_De_Nacimiento:
            return self.Fecha_De_Nacimiento.strftime("%m/%d/%y")
        return ""

    # devuelve el nombre completo de la persona como representación del objeto.
    def __str__(self):
        return self.Nombre_Completo
