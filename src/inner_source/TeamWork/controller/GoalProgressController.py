from TeamWork.models import GoalProgress
from TeamWork.serializers.goalProgressSerializer import GoalProgressSerializer
# class-based views
from django.http import Http404, HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status



class GoalProgressList(APIView):
    def get(self, request, format = None):
        """
        List all GoalProgress, or create a new GoalProgress.
        """
        goalProgress = GoalProgress.objects.all()
        serializer = GoalProgressSerializer(goalProgress, many=True)
        return Response(serializer.data)

    def post(self, request, format = None):
        serializer = GoalProgressSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_404_CREATED)

class GoalProgressDetail(APIView):
    def get_object(self, pk):
        try:
            return GoalProgress.objects.get(pk = pk)
        except GoalProgress.DoesNotExist:
            raise Http404

    def get(self, request, pk, format = None):
        goalProgress = self.get_object(pk)
        serializer = GoalProgressSerializer(goalProgress)
        return Response(serializer.data)

    def put(self, request, pk):
        goalProgress = self.get_object(pk)
        serializer = GoalProgressSerializer(goalProgress, data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(goalProgress.errors, status = status.HTTP_400_CREATED)

    def delete(self, request, pk):
        goalProgress = self.get_object(pk)
        goalProgress.delete()
        return HttpResponse(status = status.HTTP_204_CREATED)







