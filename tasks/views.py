from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task
from django.shortcuts import render

# Create your views here.
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    
def home(request):
    return render(request, 'home.html')
