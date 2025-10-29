// https://registry.terraform.io/providers/redislabs/rediscloud/2.7.1/docs/resources/active_active_private_service_connect_endpoint_accepter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ActiveActivePrivateServiceConnectEndpointAccepterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Accept or reject the endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.1/docs/resources/active_active_private_service_connect_endpoint_accepter#action ActiveActivePrivateServiceConnectEndpointAccepter#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.1/docs/resources/active_active_private_service_connect_endpoint_accepter#id ActiveActivePrivateServiceConnectEndpointAccepter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the Private Service Connect Endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.1/docs/resources/active_active_private_service_connect_endpoint_accepter#private_service_connect_endpoint_id ActiveActivePrivateServiceConnectEndpointAccepter#private_service_connect_endpoint_id}
  */
  readonly privateServiceConnectEndpointId: number;
  /**
  * The ID of the Private Service Connect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.1/docs/resources/active_active_private_service_connect_endpoint_accepter#private_service_connect_service_id ActiveActivePrivateServiceConnectEndpointAccepter#private_service_connect_service_id}
  */
  readonly privateServiceConnectServiceId: number;
  /**
  * The ID of the GCP region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.1/docs/resources/active_active_private_service_connect_endpoint_accepter#region_id ActiveActivePrivateServiceConnectEndpointAccepter#region_id}
  */
  readonly regionId: number;
  /**
  * The ID of the Pro subscription to attach
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.1/docs/resources/active_active_private_service_connect_endpoint_accepter#subscription_id ActiveActivePrivateServiceConnectEndpointAccepter#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.1/docs/resources/active_active_private_service_connect_endpoint_accepter#timeouts ActiveActivePrivateServiceConnectEndpointAccepter#timeouts}
  */
  readonly timeouts?: ActiveActivePrivateServiceConnectEndpointAccepterTimeouts;
}
export interface ActiveActivePrivateServiceConnectEndpointAccepterTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.1/docs/resources/active_active_private_service_connect_endpoint_accepter#create ActiveActivePrivateServiceConnectEndpointAccepter#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.1/docs/resources/active_active_private_service_connect_endpoint_accepter#delete ActiveActivePrivateServiceConnectEndpointAccepter#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.1/docs/resources/active_active_private_service_connect_endpoint_accepter#read ActiveActivePrivateServiceConnectEndpointAccepter#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.1/docs/resources/active_active_private_service_connect_endpoint_accepter#update ActiveActivePrivateServiceConnectEndpointAccepter#update}
  */
  readonly update?: string;
}

export function activeActivePrivateServiceConnectEndpointAccepterTimeoutsToTerraform(struct?: ActiveActivePrivateServiceConnectEndpointAccepterTimeouts | cdktf.IResolvable): any {
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


export function activeActivePrivateServiceConnectEndpointAccepterTimeoutsToHclTerraform(struct?: ActiveActivePrivateServiceConnectEndpointAccepterTimeouts | cdktf.IResolvable): any {
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

export class ActiveActivePrivateServiceConnectEndpointAccepterTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ActiveActivePrivateServiceConnectEndpointAccepterTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ActiveActivePrivateServiceConnectEndpointAccepterTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.1/docs/resources/active_active_private_service_connect_endpoint_accepter rediscloud_active_active_private_service_connect_endpoint_accepter}
*/
export class ActiveActivePrivateServiceConnectEndpointAccepter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rediscloud_active_active_private_service_connect_endpoint_accepter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ActiveActivePrivateServiceConnectEndpointAccepter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ActiveActivePrivateServiceConnectEndpointAccepter to import
  * @param importFromId The id of the existing ActiveActivePrivateServiceConnectEndpointAccepter that should be imported. Refer to the {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.1/docs/resources/active_active_private_service_connect_endpoint_accepter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ActiveActivePrivateServiceConnectEndpointAccepter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rediscloud_active_active_private_service_connect_endpoint_accepter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/redislabs/rediscloud/2.7.1/docs/resources/active_active_private_service_connect_endpoint_accepter rediscloud_active_active_private_service_connect_endpoint_accepter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ActiveActivePrivateServiceConnectEndpointAccepterConfig
  */
  public constructor(scope: Construct, id: string, config: ActiveActivePrivateServiceConnectEndpointAccepterConfig) {
    super(scope, id, {
      terraformResourceType: 'rediscloud_active_active_private_service_connect_endpoint_accepter',
      terraformGeneratorMetadata: {
        providerName: 'rediscloud',
        providerVersion: '2.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._id = config.id;
    this._privateServiceConnectEndpointId = config.privateServiceConnectEndpointId;
    this._privateServiceConnectServiceId = config.privateServiceConnectServiceId;
    this._regionId = config.regionId;
    this._subscriptionId = config.subscriptionId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // private_service_connect_endpoint_id - computed: false, optional: false, required: true
  private _privateServiceConnectEndpointId?: number; 
  public get privateServiceConnectEndpointId() {
    return this.getNumberAttribute('private_service_connect_endpoint_id');
  }
  public set privateServiceConnectEndpointId(value: number) {
    this._privateServiceConnectEndpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateServiceConnectEndpointIdInput() {
    return this._privateServiceConnectEndpointId;
  }

  // private_service_connect_service_id - computed: false, optional: false, required: true
  private _privateServiceConnectServiceId?: number; 
  public get privateServiceConnectServiceId() {
    return this.getNumberAttribute('private_service_connect_service_id');
  }
  public set privateServiceConnectServiceId(value: number) {
    this._privateServiceConnectServiceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateServiceConnectServiceIdInput() {
    return this._privateServiceConnectServiceId;
  }

  // region_id - computed: false, optional: false, required: true
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ActiveActivePrivateServiceConnectEndpointAccepterTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ActiveActivePrivateServiceConnectEndpointAccepterTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      private_service_connect_endpoint_id: cdktf.numberToTerraform(this._privateServiceConnectEndpointId),
      private_service_connect_service_id: cdktf.numberToTerraform(this._privateServiceConnectServiceId),
      region_id: cdktf.numberToTerraform(this._regionId),
      subscription_id: cdktf.stringToTerraform(this._subscriptionId),
      timeouts: activeActivePrivateServiceConnectEndpointAccepterTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_service_connect_endpoint_id: {
        value: cdktf.numberToHclTerraform(this._privateServiceConnectEndpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_service_connect_service_id: {
        value: cdktf.numberToHclTerraform(this._privateServiceConnectServiceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subscription_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: activeActivePrivateServiceConnectEndpointAccepterTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ActiveActivePrivateServiceConnectEndpointAccepterTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
