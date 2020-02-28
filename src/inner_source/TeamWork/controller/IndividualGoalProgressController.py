from TeamWork.models import IndividualGoalProgress
from TeamWork.serializers.individualGoalProgressSerializer import IndividualGoalProgressSerializer
# class-based views
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



class IndividualGoalProgressList(APIView):
    def get(self, request, format = None):
        """
        List all IndividualGoalProgress, or create a new IndividualGoalProgress.
        """
        individualGoalProgress = IndividualGoalProgress.objects.all()
        serializer = IndividualGoalProgressSerializer(individualGoalProgress, many=True)
        return Response(serializer.data)

    def post(self, request, format = None):
        serializer = IndividualGoalProgressSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_404_CREATED)

class IndividualGoalProgressDetail(APIView):
    def get_object(self, pk):
        try:
            return IndividualGoalProgress.objects.get(pk = pk)
        except IndividualGoalProgress.DoesNotExist:
            raise Http404

    def get(self, request, pk, format = None):
        individualGoalProgress = self.get_object(pk)
        serializer = IndividualGoalProgressSerializer(individualGoalProgress)
        return Response(serializer.data)

    def put(self, request, pk):
        individualGoalProgress = self.get_object(pk)
        serializer = IndividualGoalProgressSerializer(individualGoalProgress, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
            return Response(individualGoalProgress.errors, status = status.HTTP_400_CREATED)

    def delete(self, request, pk):
        individualGoalProgress = self.get_object(pk)
        individualGoalProgress.delete()
        return HttpResponse(status = status.HTTP_204_CREATED)






