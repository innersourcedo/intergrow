from TeamWork.models import Employee
from TeamWork.serializers.employeeSerializer import EmployeeSerializer
# class-based views
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



class EmployeeList(APIView):
    def get(self, request, format = None):
        """
        List all Employee, or create a new Employee.
        """
        employee = Employee.objects.all()
        serializer = EmployeeSerializer(employee, many=True)
        return Response(serializer.data)

    def post(self, request, format = None):
        serializer = EmployeeSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_404_CREATED)

class EmployeeDetail(APIView):
    def get_object(self, pk):
        try:
            return Employee.objects.get(pk = pk)
        except Employee.DoesNotExist:
            raise Http404

    def get(self, request, pk, format = None):
        employee = self.get_object(pk)
        serializer = EmployeeSerializer(employee)
        return Response(serializer.data)

    def put(self, request, pk):
        employee = self.get_object(pk)
        serializer = EmployeeSerializer(employee, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
            return Response(employee.errors, status = status.HTTP_400_CREATED)

    def delete(self, request, pk):
        employee = self.get_object(pk)
        employee.delete()
        return HttpResponse(status = status.HTTP_204_CREATED)







