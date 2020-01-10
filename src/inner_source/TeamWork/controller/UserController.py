from django.contrib.auth.models import User
from TeamWork.serializers.userSerializer import UserSerializer


# Refactoring to use ViewSets
from rest_framework import viewsets

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    """
    This viewset automatically provides `list` and `detail` actions.
    """
    queryset = User.objects.all()
    serializer_class = UserSerializer


# # for mixed-in generic
    # from rest_framework import generics
    # from rest_framework import permissions



    # class UserList(generics.ListAPIView):
    #     queryset = User.objects.all()
    #     serializer_class = UserSerializer


    # class UserDetail(generics.RetrieveAPIView):
    #     queryset = User.objects.all()
    #     serializer_class = UserSerializer
