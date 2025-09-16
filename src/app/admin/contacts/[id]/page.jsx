"use client";
import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import {
  ArrowLeft,
  Mail,
  Phone,
  Clock,
  User,
  MessageSquare,
  Tag,
  Calendar,
  Globe,
  Monitor,
  Plus,
  Edit,
  Save,
  X
} from 'lucide-react';
import adminApiService from '@/lib/adminApi';

const STATUS_OPTIONS = [
  { value: 'pending', label: 'Pending', color: 'bg-yellow-500' },
  { value: 'in-progress', label: 'In Progress', color: 'bg-blue-500' },
  { value: 'resolved', label: 'Resolved', color: 'bg-green-500' },
  { value: 'closed', label: 'Closed', color: 'bg-gray-500' }
];

const PRIORITY_OPTIONS = [
  { value: 'low', label: 'Low', color: 'bg-green-500' },
  { value: 'medium', label: 'Medium', color: 'bg-yellow-500' },
  { value: 'high', label: 'High', color: 'bg-red-500' }
];

export default function ContactDetail() {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});
  const [newNote, setNewNote] = useState('');
  const [addingNote, setAddingNote] = useState(false);

  const router = useRouter();
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    if (id) {
      fetchContact();
    }
  }, [id]);

  const fetchContact = async () => {
    setLoading(true);
    try {
      const response = await adminApiService.getContact(id);
      if (response.data) {
        setContact(response.data);
        setEditData({
          status: response.data.status,
          priority: response.data.priority
        });
      }
    } catch (error) {
      setError('Failed to load contact details');
      console.error('Contact fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await adminApiService.updateContact(id, editData);
      if (response.data) {
        setContact(response.data);
        setIsEditing(false);
      }
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  const handleAddNote = async () => {
    if (!newNote.trim()) return;

    setAddingNote(true);
    try {
      const response = await adminApiService.addContactNote(id, newNote);
      if (response.data) {
        setContact(response.data);
        setNewNote('');
      }
    } catch (error) {
      console.error('Add note error:', error);
    } finally {
      setAddingNote(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStatusColor = (status) => {
    const statusOption = STATUS_OPTIONS.find(opt => opt.value === status);
    return statusOption ? statusOption.color : 'bg-gray-500';
  };

  const getPriorityColor = (priority) => {
    const priorityOption = PRIORITY_OPTIONS.find(opt => opt.value === priority);
    return priorityOption ? priorityOption.color : 'bg-gray-500';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-white">Loading contact details...</div>
      </div>
    );
  }

  if (error || !contact) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-red-400">{error || 'Contact not found'}</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => router.back()}
            className="p-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-white">Contact Details</h1>
            <p className="text-gray-400 mt-1">
              {contact.name} • {contact.email}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          {isEditing ? (
            <>
              <button
                onClick={handleUpdate}
                className="inline-flex items-center px-4 py-2 bg-[#6A27FF] hover:bg-[#5a1fdd] text-white rounded-lg transition-colors"
              >
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="inline-flex items-center px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
              >
                <X className="mr-2 h-4 w-4" />
                Cancel
              </button>
            </>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="inline-flex items-center px-4 py-2 bg-[#6A27FF] hover:bg-[#5a1fdd] text-white rounded-lg transition-colors"
            >
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact Information */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Info */}
          <div className="bg-[#1A1A1A] border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <User className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-400">Name</p>
                    <p className="text-white font-medium">{contact.name}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white font-medium">{contact.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="text-white font-medium">{contact.phoneNumber}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MessageSquare className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-400">Question Type</p>
                    <p className="text-white font-medium">{contact.productQuestion}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-400">Submitted</p>
                    <p className="text-white font-medium">{formatDate(contact.createdAt)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-400">Source</p>
                    <p className="text-white font-medium capitalize">{contact.source}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="bg-[#1A1A1A] border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Message</h3>
            <div className="bg-[#0A0A0A] border border-gray-600 rounded-lg p-4">
              <p className="text-gray-300 whitespace-pre-wrap">{contact.message}</p>
            </div>
          </div>

          {/* Notes */}
          <div className="bg-[#1A1A1A] border border-gray-700 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Notes</h3>
              <button
                onClick={() => setAddingNote(!addingNote)}
                className="inline-flex items-center px-3 py-1 bg-[#6A27FF] hover:bg-[#5a1fdd] text-white rounded-lg transition-colors text-sm"
              >
                <Plus className="mr-1 h-4 w-4" />
                Add Note
              </button>
            </div>

            {addingNote && (
              <div className="mb-4 space-y-3">
                <textarea
                  value={newNote}
                  onChange={(e) => setNewNote(e.target.value)}
                  placeholder="Add a note..."
                  className="w-full p-3 bg-[#0A0A0A] border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6A27FF] resize-none"
                  rows="3"
                />
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handleAddNote}
                    disabled={!newNote.trim() || addingNote}
                    className="px-4 py-2 bg-[#6A27FF] hover:bg-[#5a1fdd] text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {addingNote ? 'Adding...' : 'Add Note'}
                  </button>
                  <button
                    onClick={() => {
                      setAddingNote(false);
                      setNewNote('');
                    }}
                    className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}

            <div className="space-y-3">
              {contact.notes && contact.notes.length > 0 ? (
                contact.notes.map((note, index) => (
                  <div key={index} className="bg-[#0A0A0A] border border-gray-600 rounded-lg p-4">
                    <p className="text-gray-300 mb-2">{note.content}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>Added {formatDate(note.createdAt)}</span>
                      {note.createdBy && <span>by {note.createdBy}</span>}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-center py-8">No notes added yet</p>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Status & Priority */}
          <div className="bg-[#1A1A1A] border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Status & Priority</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Status
                </label>
                {isEditing ? (
                  <select
                    value={editData.status}
                    onChange={(e) => setEditData(prev => ({ ...prev, status: e.target.value }))}
                    className="w-full px-3 py-2 bg-[#0A0A0A] border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#6A27FF]"
                  >
                    {STATUS_OPTIONS.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(contact.status)}`} />
                    <span className="text-white capitalize">{contact.status}</span>
                  </div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Priority
                </label>
                {isEditing ? (
                  <select
                    value={editData.priority}
                    onChange={(e) => setEditData(prev => ({ ...prev, priority: e.target.value }))}
                    className="w-full px-3 py-2 bg-[#0A0A0A] border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#6A27FF]"
                  >
                    {PRIORITY_OPTIONS.map(option => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${getPriorityColor(contact.priority)}`} />
                    <span className="text-white capitalize">{contact.priority}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Technical Info */}
          <div className="bg-[#1A1A1A] border border-gray-700 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Technical Info</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-gray-400">IP Address</p>
                <p className="text-white">{contact.ipAddress}</p>
              </div>
              <div>
                <p className="text-gray-400">User Agent</p>
                <p className="text-white text-xs break-all">{contact.userAgent}</p>
              </div>
              <div>
                <p className="text-gray-400">Read Status</p>
                <p className="text-white">{contact.isRead ? 'Read' : 'Unread'}</p>
              </div>
              {contact.readAt && (
                <div>
                  <p className="text-gray-400">Read At</p>
                  <p className="text-white">{formatDate(contact.readAt)}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}