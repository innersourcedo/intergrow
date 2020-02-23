from TeamWork.models import TeamGoal
from TeamWork.serializers.teamGoalSerializer import TeamGoalSerializer
# class-based views
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



class TeamGoalList(APIView):
    def get(self, request, format = None):
        """
        List all TeamGoal, or create a new TeamGoal.
        """
        teamGoal = TeamGoal.objects.all()
        serializer = TeamGoalSerializer(teamGoal, many=True)
        return Response(serializer.data)

    def post(self, request, format = None):
        serializer = TeamGoalSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_404_CREATED)

class TeamGoalDetail(APIView):
    def get_object(self, pk):
        try:
            return TeamGoal.objects.get(pk = pk)
        except TeamGoal.DoesNotExist:
            raise Http404

    def get(self, request, pk, format = None):
        teamGoal = self.get_object(pk)
        serializer = TeamGoalSerializer(teamGoal)
        return Response(serializer.data)

    def put(self, request, pk):
        teamGoal = self.get_object(pk)
        serializer = TeamGoalSerializer(teamGoal, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
            return Response(teamGoal.errors, status = status.HTTP_400_CREATED)

    def delete(self, request, pk, format=None):
        teamGoal = self.get_object(pk)
        teamGoal.delete()
        return HttpResponse(status = status.HTTP_204_CREATED)







