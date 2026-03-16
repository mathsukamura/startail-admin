import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '../../shared/components/ui/icon/icon.component';
import { conversations, ChatUser, ChatMessage } from './chats.data';

@Component({
  selector: 'app-chats',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent],
  templateUrl: './chats.component.html',
})
export class ChatsComponent {
  conversations = conversations;
  search = '';
  selectedUser: ChatUser | null = null;
  mobileSelectedUser: ChatUser | null = null;
  newMessage = '';

  get filteredChatList(): ChatUser[] {
    const q = this.search.trim().toLowerCase();
    if (!q) return this.conversations;
    return this.conversations.filter((c) =>
      c.fullName.toLowerCase().includes(q)
    );
  }

  get groupedMessages(): { date: string; messages: ChatMessage[] }[] | null {
    if (!this.selectedUser) return null;
    const groups: Record<string, ChatMessage[]> = {};
    for (const msg of this.selectedUser.messages) {
      const d = new Date(msg.timestamp);
      const key = d.toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
      if (!groups[key]) groups[key] = [];
      groups[key].push(msg);
    }
    return Object.entries(groups).map(([date, messages]) => ({
      date,
      messages,
    }));
  }

  selectUser(user: ChatUser) {
    this.selectedUser = user;
    this.mobileSelectedUser = user;
  }

  goBackMobile() {
    this.mobileSelectedUser = null;
  }

  getLastMessage(user: ChatUser): string {
    const last = user.messages[0];
    if (!last) return '';
    return last.sender === 'You' ? `You: ${last.message}` : last.message;
  }

  formatTime(timestamp: string): string {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }

  onSend() {
    if (!this.newMessage.trim() || !this.selectedUser) return;
    this.selectedUser.messages.unshift({
      sender: 'You',
      message: this.newMessage.trim(),
      timestamp: new Date().toISOString(),
    });
    this.newMessage = '';
  }
}
