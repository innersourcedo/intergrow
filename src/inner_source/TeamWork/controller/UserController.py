from django.contrib.auth.models import User

from TeamWork.serializers.userSerializer import UserSerializer

# Refactoring to use ViewSets
from rest_framework import viewsets

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


class UserViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CustomUserGetByUsername(APIView):
    def get(self, request, username, format = None):
        """
        List all GoalProgress, or create a new GoalProgress.
        """
        user = User.objects.get(username=username)
        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)