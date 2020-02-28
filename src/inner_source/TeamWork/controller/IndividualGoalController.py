from TeamWork.models import IndividualGoal
from TeamWork.serializers.individualGoalSerializer import IndividualGoalSerializer
# class-based views
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



class IndividualGoalList(APIView):
    def get(self, request, format = None):
        """
        List all IndividualGoal, or create a new IndividualGoal.
        """
        individualGoal = IndividualGoal.objects.all()
        serializer = IndividualGoalSerializer(individualGoal, many=True)
        return Response(serializer.data)

    def post(self, request, format = None):
        serializer = IndividualGoalSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_404_CREATED)

class IndividualGoalDetail(APIView):
    def get_object(self, pk):
        try:
            return IndividualGoal.objects.get(pk = pk)
        except IndividualGoal.DoesNotExist:
            raise Http404

    def get(self, request, pk, format = None):
        individualGoal = self.get_object(pk)
        serializer = IndividualGoalSerializer(individualGoal)
        return Response(serializer.data)

    def put(self, request, pk):
        individualGoal = self.get_object(pk)
        serializer = IndividualGoalSerializer(individualGoal, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
            return Response(individualGoal.errors, status = status.HTTP_400_CREATED)

    def delete(self, request, pk):
        individualGoal = self.get_object(pk)
        individualGoal.delete()
        return HttpResponse(status = status.HTTP_204_CREATED)


class GetIndividualGoalByEmpId(APIView):
    def get(self, request, empId, format = None):
        individual_goal = IndividualGoal.objects.filter(employee=empId)
        serializer = IndividualGoalSerializer(individual_goal, many=True)
        return Response(serializer.data)




