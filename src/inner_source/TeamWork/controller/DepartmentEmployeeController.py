from TeamWork.models import DepartmentEmployee
from TeamWork.serializers.departmentEmployeeSerializer import DepartmentEmployeeSerializer
# class-based views
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



class DepartmentEmployeeList(APIView):
    def get(self, request, format = None):
        """
        List all Teams, or create a new DepartmentEmployee.
        """
        departmentEmployee = DepartmentEmployee.objects.all()
        serializer = DepartmentEmployeeSerializer(departmentEmployee, many=True)
        return Response(serializer.data)

    def post(self, request, format = None):
        serializer = DepartmentEmployeeSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_404_CREATED)

class DepartmentEmployeeDetail(APIView):
    def get_object(self, pk):
        try:
            return DepartmentEmployee.objects.get(pk = pk)
        except DepartmentEmployee.DoesNotExist:
            raise Http404

    def get(self, request, pk, format = None):
        departmentEmployee = self.get_object(pk)
        serializer = DepartmentEmployeeSerializer(departmentEmployee)
        return Response(serializer.data)

    def put(self, request, pk):
        departmentEmployee = self.get_object(pk)
        serializer = DepartmentEmployeeSerializer(departmentEmployee, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
            return Response(departmentEmployee.errors, status = status.HTTP_400_CREATED)

    def delete(self, request, pk):
        departmentEmployee = self.get_object(pk)
        departmentEmployee.delete()
        return HttpResponse(status = status.HTTP_204_CREATED)
