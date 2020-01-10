from TeamWork.models import Department
from TeamWork.serializers.departmentSerializer import DepartmentSerializer
# class-based views
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



class DepartmentList(APIView):
    def get(self, request, format = None):
        """
        List all Teams, or create a new Department.
        """
        department = Department.objects.all()
        serializer = DepartmentSerializer(department, many=True)
        return Response(serializer.data)

    def post(self, request, format = None):
        serializer = DepartmentSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_404_CREATED)

class DepartmentDetail(APIView):
    def get_object(self, pk):
        try:
            return Department.objects.get(pk = pk)
        except Department.DoesNotExist:
            raise Http404

    def get(self, request, pk, format = None):
        department = self.get_object(pk)
        serializer = DepartmentSerializer(department)
        return Response(serializer.data)

    def put(self, request, pk):
        department = self.get_object(pk)
        serializer = DepartmentSerializer(department, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
            return Response(department.errors, status = status.HTTP_400_CREATED)

    def delete(self, request, pk):
        department = self.get_object(pk)
        department.delete()
        return HttpResponse(status = status.HTTP_204_CREATED)
