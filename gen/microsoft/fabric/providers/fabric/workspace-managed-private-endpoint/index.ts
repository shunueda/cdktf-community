// https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_managed_private_endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceManagedPrivateEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> The Workspace Managed Private Endpoint name. String length must be at most 64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_managed_private_endpoint#name WorkspaceManagedPrivateEndpoint#name}
  */
  readonly name: string;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> Request message. String length must be at most 140.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_managed_private_endpoint#request_message WorkspaceManagedPrivateEndpoint#request_message}
  */
  readonly requestMessage: string;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> Resource ID of data source for which private endpoint is created. Resource ID must be in the format `/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName}`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_managed_private_endpoint#target_private_link_resource_id WorkspaceManagedPrivateEndpoint#target_private_link_resource_id}
  */
  readonly targetPrivateLinkResourceId: string;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> Sub-resource pointing to [Private-link resource](https://learn.microsoft.com/azure/private-link/private-endpoint-overview#private-link-resource).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_managed_private_endpoint#target_subresource_type WorkspaceManagedPrivateEndpoint#target_subresource_type}
  */
  readonly targetSubresourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_managed_private_endpoint#timeouts WorkspaceManagedPrivateEndpoint#timeouts}
  */
  readonly timeouts?: WorkspaceManagedPrivateEndpointTimeouts;
  /**
  * <i style="color:red;font-weight: bold">(ForceNew)</i> The Workspace ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_managed_private_endpoint#workspace_id WorkspaceManagedPrivateEndpoint#workspace_id}
  */
  readonly workspaceId: string;
}
export interface WorkspaceManagedPrivateEndpointConnectionState {
}

export function workspaceManagedPrivateEndpointConnectionStateToTerraform(struct?: WorkspaceManagedPrivateEndpointConnectionState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function workspaceManagedPrivateEndpointConnectionStateToHclTerraform(struct?: WorkspaceManagedPrivateEndpointConnectionState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class WorkspaceManagedPrivateEndpointConnectionStateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceManagedPrivateEndpointConnectionState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceManagedPrivateEndpointConnectionState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // actions_required - computed: true, optional: false, required: false
  public get actionsRequired() {
    return this.getStringAttribute('actions_required');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}
export interface WorkspaceManagedPrivateEndpointTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_managed_private_endpoint#create WorkspaceManagedPrivateEndpoint#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_managed_private_endpoint#delete WorkspaceManagedPrivateEndpoint#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Read operations occur during any refresh or planning operation when refresh is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_managed_private_endpoint#read WorkspaceManagedPrivateEndpoint#read}
  */
  readonly read?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_managed_private_endpoint#update WorkspaceManagedPrivateEndpoint#update}
  */
  readonly update?: string;
}

export function workspaceManagedPrivateEndpointTimeoutsToTerraform(struct?: WorkspaceManagedPrivateEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function workspaceManagedPrivateEndpointTimeoutsToHclTerraform(struct?: WorkspaceManagedPrivateEndpointTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceManagedPrivateEndpointTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WorkspaceManagedPrivateEndpointTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceManagedPrivateEndpointTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_managed_private_endpoint fabric_workspace_managed_private_endpoint}
*/
export class WorkspaceManagedPrivateEndpoint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fabric_workspace_managed_private_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceManagedPrivateEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceManagedPrivateEndpoint to import
  * @param importFromId The id of the existing WorkspaceManagedPrivateEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_managed_private_endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceManagedPrivateEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fabric_workspace_managed_private_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/microsoft/fabric/1.6.0/docs/resources/workspace_managed_private_endpoint fabric_workspace_managed_private_endpoint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceManagedPrivateEndpointConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceManagedPrivateEndpointConfig) {
    super(scope, id, {
      terraformResourceType: 'fabric_workspace_managed_private_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'fabric',
        providerVersion: '1.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._requestMessage = config.requestMessage;
    this._targetPrivateLinkResourceId = config.targetPrivateLinkResourceId;
    this._targetSubresourceType = config.targetSubresourceType;
    this._timeouts.internalValue = config.timeouts;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_state - computed: true, optional: false, required: false
  private _connectionState = new WorkspaceManagedPrivateEndpointConnectionStateOutputReference(this, "connection_state");
  public get connectionState() {
    return this._connectionState;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // provisioning_state - computed: true, optional: false, required: false
  public get provisioningState() {
    return this.getStringAttribute('provisioning_state');
  }

  // request_message - computed: false, optional: false, required: true
  private _requestMessage?: string; 
  public get requestMessage() {
    return this.getStringAttribute('request_message');
  }
  public set requestMessage(value: string) {
    this._requestMessage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMessageInput() {
    return this._requestMessage;
  }

  // target_private_link_resource_id - computed: false, optional: false, required: true
  private _targetPrivateLinkResourceId?: string; 
  public get targetPrivateLinkResourceId() {
    return this.getStringAttribute('target_private_link_resource_id');
  }
  public set targetPrivateLinkResourceId(value: string) {
    this._targetPrivateLinkResourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPrivateLinkResourceIdInput() {
    return this._targetPrivateLinkResourceId;
  }

  // target_subresource_type - computed: false, optional: false, required: true
  private _targetSubresourceType?: string; 
  public get targetSubresourceType() {
    return this.getStringAttribute('target_subresource_type');
  }
  public set targetSubresourceType(value: string) {
    this._targetSubresourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetSubresourceTypeInput() {
    return this._targetSubresourceType;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WorkspaceManagedPrivateEndpointTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WorkspaceManagedPrivateEndpointTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      request_message: cdktf.stringToTerraform(this._requestMessage),
      target_private_link_resource_id: cdktf.stringToTerraform(this._targetPrivateLinkResourceId),
      target_subresource_type: cdktf.stringToTerraform(this._targetSubresourceType),
      timeouts: workspaceManagedPrivateEndpointTimeoutsToTerraform(this._timeouts.internalValue),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_message: {
        value: cdktf.stringToHclTerraform(this._requestMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_private_link_resource_id: {
        value: cdktf.stringToHclTerraform(this._targetPrivateLinkResourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_subresource_type: {
        value: cdktf.stringToHclTerraform(this._targetSubresourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: workspaceManagedPrivateEndpointTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WorkspaceManagedPrivateEndpointTimeouts",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
