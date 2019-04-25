from api.serializers import TaskListSerializer2, TasksSerializer2,  UserSerializer
from rest_framework import generics
# from rest_framework.authtoken.models import
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from api.models import TaskList, Task

class TaskListt(generics.ListCreateAPIView):
    serializer_class = TaskListSerializer2
    permission_classes = (IsAuthenticated,)

    def get_queryset(self):
        return TaskList.objects.for_user_order_by_name(self.request.user)

    def perform_create(self, serializer):
        return serializer.save(created_by=self.request.user)

class TaskListNum(generics.RetrieveUpdateDestroyAPIView):
    queryset = TaskList.objects.all()
    serializer_class = TaskListSerializer2