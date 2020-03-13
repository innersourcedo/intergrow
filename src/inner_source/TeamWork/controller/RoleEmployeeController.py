from TeamWork.models import RoleEmployee
from TeamWork.serializers.roleEmployeeSerializer import RoleEmployeeSerializer
# class-based views
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



class RoleEmployeeList(APIView):
    def get(self, request, format = None):
        """
        List all RoleEmployee, or create a new RoleEmployee.
        """
        roleEmployee = RoleEmployee.objects.all()
        serializer = RoleEmployeeSerializer(roleEmployee, many=True)
        return Response(serializer.data)

    def post(self, request, format = None):
        serializer = RoleEmployeeSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_404_CREATED)

class RoleEmployeeDetail(APIView):
    def get_object(self, pk):
        try:
            return RoleEmployee.objects.get(pk = pk)
        except RoleEmployee.DoesNotExist:
            raise Http404

    def get(self, request, pk, format = None):
        roleEmployee = self.get_object(pk)
        serializer = RoleEmployeeSerializer(roleEmployee)
        return Response(serializer.data)

    def put(self, request, pk):
        roleEmployee = self.get_object(pk)
        serializer = RoleEmployeeSerializer(roleEmployee, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
            return Response(roleEmployee.errors, status = status.HTTP_400_CREATED)

    def delete(self, request, pk):
        roleEmployee = self.get_object(pk)
        roleEmployee.delete()
        return HttpResponse(status = status.HTTP_204_CREATED)


# class GetProgressByGoalId(APIView):
#     def get_object(self, indiGoalId):
#         try:
#             return RoleEmployee.objects.filter(individual_goal = indiGoalId)
#         except RoleEmployee.DoesNotExist:
#             raise Http404

#     def get(self, request, indiGoalId, format = None):
#         roleEmployee = self.get_object(indiGoalId)
#         serializer = RoleEmployeeSerializer(roleEmployee, many=True)
#         return Response(serializer.data)



