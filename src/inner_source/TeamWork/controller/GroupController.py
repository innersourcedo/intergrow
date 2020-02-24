# from django.contrib.auth.models import Group

# from TeamWork.serializers.groupSerializer import GroupSerializer

# # Refactoring to use ViewSets
# from rest_framework import viewsets

# class GroupViewSet(viewsets.ModelViewSet):
#     """
#     This viewset automatically provides `list` and `detail` actions.
#     """
#     queryset = Group.objects.all()
#     serializer_class = GroupSerializer

from django.contrib.auth.models import Group
from TeamWork.serializers.groupSerializer import GroupSerializer
# class-based views
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



class GroupList(APIView):
    def get(self, request, format = None):
        """
        List all Group, or create a new Group.
        """
        group = Group.objects.all()
        serializer = GroupSerializer(group, many=True)
        return Response(serializer.data)

    def post(self, request, format = None):
        serializer = GroupSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_404_CREATED)

class GroupDetail(APIView):
    def get_object(self, pk):
        try:
            return Group.objects.get(pk = pk)
        except Group.DoesNotExist:
            raise Http404

    def get(self, request, pk, format = None):
        group = self.get_object(pk)
        serializer = GroupSerializer(group)
        return Response(serializer.data)

    def put(self, request, pk):
        group = self.get_object(pk)
        serializer = GroupSerializer(group, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
            return Response(group.errors, status = status.HTTP_400_CREATED)

    def delete(self, request, pk):
        group = self.get_object(pk)
        group.delete()
        return HttpResponse(status = status.HTTP_204_CREATED)







