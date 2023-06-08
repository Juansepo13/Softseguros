# Generated by Django 4.2.2 on 2023-06-07 23:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Nombre_Completo', models.CharField(max_length=200)),
                ('Email', models.CharField(max_length=100)),
                ('Fecha_De_Nacimiento', models.DateField(blank=True, null=True)),
                ('Fecha_De_Creacion', models.DateField(auto_now_add=True)),
                ('Numero_Documento', models.IntegerField()),
            ],
        ),
    ]
