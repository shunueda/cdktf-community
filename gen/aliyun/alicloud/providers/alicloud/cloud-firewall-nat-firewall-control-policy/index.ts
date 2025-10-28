// https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudFirewallNatFirewallControlPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#acl_action CloudFirewallNatFirewallControlPolicy#acl_action}
  */
  readonly aclAction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#application_name_list CloudFirewallNatFirewallControlPolicy#application_name_list}
  */
  readonly applicationNameList: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#description CloudFirewallNatFirewallControlPolicy#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#dest_port CloudFirewallNatFirewallControlPolicy#dest_port}
  */
  readonly destPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#dest_port_group CloudFirewallNatFirewallControlPolicy#dest_port_group}
  */
  readonly destPortGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#dest_port_type CloudFirewallNatFirewallControlPolicy#dest_port_type}
  */
  readonly destPortType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#destination CloudFirewallNatFirewallControlPolicy#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#destination_type CloudFirewallNatFirewallControlPolicy#destination_type}
  */
  readonly destinationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#direction CloudFirewallNatFirewallControlPolicy#direction}
  */
  readonly direction: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#domain_resolve_type CloudFirewallNatFirewallControlPolicy#domain_resolve_type}
  */
  readonly domainResolveType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#end_time CloudFirewallNatFirewallControlPolicy#end_time}
  */
  readonly endTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#id CloudFirewallNatFirewallControlPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#ip_version CloudFirewallNatFirewallControlPolicy#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#nat_gateway_id CloudFirewallNatFirewallControlPolicy#nat_gateway_id}
  */
  readonly natGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#new_order CloudFirewallNatFirewallControlPolicy#new_order}
  */
  readonly newOrder: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#proto CloudFirewallNatFirewallControlPolicy#proto}
  */
  readonly proto: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#release CloudFirewallNatFirewallControlPolicy#release}
  */
  readonly release?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#repeat_days CloudFirewallNatFirewallControlPolicy#repeat_days}
  */
  readonly repeatDays?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#repeat_end_time CloudFirewallNatFirewallControlPolicy#repeat_end_time}
  */
  readonly repeatEndTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#repeat_start_time CloudFirewallNatFirewallControlPolicy#repeat_start_time}
  */
  readonly repeatStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#repeat_type CloudFirewallNatFirewallControlPolicy#repeat_type}
  */
  readonly repeatType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#source CloudFirewallNatFirewallControlPolicy#source}
  */
  readonly source: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#source_type CloudFirewallNatFirewallControlPolicy#source_type}
  */
  readonly sourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#start_time CloudFirewallNatFirewallControlPolicy#start_time}
  */
  readonly startTime?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#timeouts CloudFirewallNatFirewallControlPolicy#timeouts}
  */
  readonly timeouts?: CloudFirewallNatFirewallControlPolicyTimeouts;
}
export interface CloudFirewallNatFirewallControlPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#create CloudFirewallNatFirewallControlPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#delete CloudFirewallNatFirewallControlPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#update CloudFirewallNatFirewallControlPolicy#update}
  */
  readonly update?: string;
}

export function cloudFirewallNatFirewallControlPolicyTimeoutsToTerraform(struct?: CloudFirewallNatFirewallControlPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudFirewallNatFirewallControlPolicyTimeoutsToHclTerraform(struct?: CloudFirewallNatFirewallControlPolicyTimeouts | cdktf.IResolvable): any {
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

export class CloudFirewallNatFirewallControlPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudFirewallNatFirewallControlPolicyTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudFirewallNatFirewallControlPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy alicloud_cloud_firewall_nat_firewall_control_policy}
*/
export class CloudFirewallNatFirewallControlPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_firewall_nat_firewall_control_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudFirewallNatFirewallControlPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudFirewallNatFirewallControlPolicy to import
  * @param importFromId The id of the existing CloudFirewallNatFirewallControlPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudFirewallNatFirewallControlPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_firewall_nat_firewall_control_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.261.0/docs/resources/cloud_firewall_nat_firewall_control_policy alicloud_cloud_firewall_nat_firewall_control_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudFirewallNatFirewallControlPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CloudFirewallNatFirewallControlPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_firewall_nat_firewall_control_policy',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.261.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aclAction = config.aclAction;
    this._applicationNameList = config.applicationNameList;
    this._description = config.description;
    this._destPort = config.destPort;
    this._destPortGroup = config.destPortGroup;
    this._destPortType = config.destPortType;
    this._destination = config.destination;
    this._destinationType = config.destinationType;
    this._direction = config.direction;
    this._domainResolveType = config.domainResolveType;
    this._endTime = config.endTime;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._natGatewayId = config.natGatewayId;
    this._newOrder = config.newOrder;
    this._proto = config.proto;
    this._release = config.release;
    this._repeatDays = config.repeatDays;
    this._repeatEndTime = config.repeatEndTime;
    this._repeatStartTime = config.repeatStartTime;
    this._repeatType = config.repeatType;
    this._source = config.source;
    this._sourceType = config.sourceType;
    this._startTime = config.startTime;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_action - computed: false, optional: false, required: true
  private _aclAction?: string; 
  public get aclAction() {
    return this.getStringAttribute('acl_action');
  }
  public set aclAction(value: string) {
    this._aclAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aclActionInput() {
    return this._aclAction;
  }

  // acl_uuid - computed: true, optional: false, required: false
  public get aclUuid() {
    return this.getStringAttribute('acl_uuid');
  }

  // application_name_list - computed: false, optional: false, required: true
  private _applicationNameList?: string[]; 
  public get applicationNameList() {
    return this.getListAttribute('application_name_list');
  }
  public set applicationNameList(value: string[]) {
    this._applicationNameList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameListInput() {
    return this._applicationNameList;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dest_port - computed: true, optional: true, required: false
  private _destPort?: string; 
  public get destPort() {
    return this.getStringAttribute('dest_port');
  }
  public set destPort(value: string) {
    this._destPort = value;
  }
  public resetDestPort() {
    this._destPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortInput() {
    return this._destPort;
  }

  // dest_port_group - computed: false, optional: true, required: false
  private _destPortGroup?: string; 
  public get destPortGroup() {
    return this.getStringAttribute('dest_port_group');
  }
  public set destPortGroup(value: string) {
    this._destPortGroup = value;
  }
  public resetDestPortGroup() {
    this._destPortGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortGroupInput() {
    return this._destPortGroup;
  }

  // dest_port_type - computed: true, optional: true, required: false
  private _destPortType?: string; 
  public get destPortType() {
    return this.getStringAttribute('dest_port_type');
  }
  public set destPortType(value: string) {
    this._destPortType = value;
  }
  public resetDestPortType() {
    this._destPortType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortTypeInput() {
    return this._destPortType;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_type - computed: false, optional: false, required: true
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
  }

  // direction - computed: false, optional: false, required: true
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // domain_resolve_type - computed: false, optional: true, required: false
  private _domainResolveType?: number; 
  public get domainResolveType() {
    return this.getNumberAttribute('domain_resolve_type');
  }
  public set domainResolveType(value: number) {
    this._domainResolveType = value;
  }
  public resetDomainResolveType() {
    this._domainResolveType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainResolveTypeInput() {
    return this._domainResolveType;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: number; 
  public get endTime() {
    return this.getNumberAttribute('end_time');
  }
  public set endTime(value: number) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // nat_gateway_id - computed: false, optional: false, required: true
  private _natGatewayId?: string; 
  public get natGatewayId() {
    return this.getStringAttribute('nat_gateway_id');
  }
  public set natGatewayId(value: string) {
    this._natGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natGatewayIdInput() {
    return this._natGatewayId;
  }

  // new_order - computed: false, optional: false, required: true
  private _newOrder?: string; 
  public get newOrder() {
    return this.getStringAttribute('new_order');
  }
  public set newOrder(value: string) {
    this._newOrder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get newOrderInput() {
    return this._newOrder;
  }

  // proto - computed: false, optional: false, required: true
  private _proto?: string; 
  public get proto() {
    return this.getStringAttribute('proto');
  }
  public set proto(value: string) {
    this._proto = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protoInput() {
    return this._proto;
  }

  // release - computed: true, optional: true, required: false
  private _release?: string; 
  public get release() {
    return this.getStringAttribute('release');
  }
  public set release(value: string) {
    this._release = value;
  }
  public resetRelease() {
    this._release = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseInput() {
    return this._release;
  }

  // repeat_days - computed: false, optional: true, required: false
  private _repeatDays?: number[]; 
  public get repeatDays() {
    return this.getNumberListAttribute('repeat_days');
  }
  public set repeatDays(value: number[]) {
    this._repeatDays = value;
  }
  public resetRepeatDays() {
    this._repeatDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatDaysInput() {
    return this._repeatDays;
  }

  // repeat_end_time - computed: false, optional: true, required: false
  private _repeatEndTime?: string; 
  public get repeatEndTime() {
    return this.getStringAttribute('repeat_end_time');
  }
  public set repeatEndTime(value: string) {
    this._repeatEndTime = value;
  }
  public resetRepeatEndTime() {
    this._repeatEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatEndTimeInput() {
    return this._repeatEndTime;
  }

  // repeat_start_time - computed: false, optional: true, required: false
  private _repeatStartTime?: string; 
  public get repeatStartTime() {
    return this.getStringAttribute('repeat_start_time');
  }
  public set repeatStartTime(value: string) {
    this._repeatStartTime = value;
  }
  public resetRepeatStartTime() {
    this._repeatStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatStartTimeInput() {
    return this._repeatStartTime;
  }

  // repeat_type - computed: true, optional: true, required: false
  private _repeatType?: string; 
  public get repeatType() {
    return this.getStringAttribute('repeat_type');
  }
  public set repeatType(value: string) {
    this._repeatType = value;
  }
  public resetRepeatType() {
    this._repeatType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatTypeInput() {
    return this._repeatType;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: number; 
  public get startTime() {
    return this.getNumberAttribute('start_time');
  }
  public set startTime(value: number) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudFirewallNatFirewallControlPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudFirewallNatFirewallControlPolicyTimeouts) {
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
      acl_action: cdktf.stringToTerraform(this._aclAction),
      application_name_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applicationNameList),
      description: cdktf.stringToTerraform(this._description),
      dest_port: cdktf.stringToTerraform(this._destPort),
      dest_port_group: cdktf.stringToTerraform(this._destPortGroup),
      dest_port_type: cdktf.stringToTerraform(this._destPortType),
      destination: cdktf.stringToTerraform(this._destination),
      destination_type: cdktf.stringToTerraform(this._destinationType),
      direction: cdktf.stringToTerraform(this._direction),
      domain_resolve_type: cdktf.numberToTerraform(this._domainResolveType),
      end_time: cdktf.numberToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      nat_gateway_id: cdktf.stringToTerraform(this._natGatewayId),
      new_order: cdktf.stringToTerraform(this._newOrder),
      proto: cdktf.stringToTerraform(this._proto),
      release: cdktf.stringToTerraform(this._release),
      repeat_days: cdktf.listMapper(cdktf.numberToTerraform, false)(this._repeatDays),
      repeat_end_time: cdktf.stringToTerraform(this._repeatEndTime),
      repeat_start_time: cdktf.stringToTerraform(this._repeatStartTime),
      repeat_type: cdktf.stringToTerraform(this._repeatType),
      source: cdktf.stringToTerraform(this._source),
      source_type: cdktf.stringToTerraform(this._sourceType),
      start_time: cdktf.numberToTerraform(this._startTime),
      timeouts: cloudFirewallNatFirewallControlPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acl_action: {
        value: cdktf.stringToHclTerraform(this._aclAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_name_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applicationNameList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_port: {
        value: cdktf.stringToHclTerraform(this._destPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_port_group: {
        value: cdktf.stringToHclTerraform(this._destPortGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dest_port_type: {
        value: cdktf.stringToHclTerraform(this._destPortType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_type: {
        value: cdktf.stringToHclTerraform(this._destinationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direction: {
        value: cdktf.stringToHclTerraform(this._direction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_resolve_type: {
        value: cdktf.numberToHclTerraform(this._domainResolveType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      end_time: {
        value: cdktf.numberToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_gateway_id: {
        value: cdktf.stringToHclTerraform(this._natGatewayId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      new_order: {
        value: cdktf.stringToHclTerraform(this._newOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proto: {
        value: cdktf.stringToHclTerraform(this._proto),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release: {
        value: cdktf.stringToHclTerraform(this._release),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repeat_days: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._repeatDays),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      repeat_end_time: {
        value: cdktf.stringToHclTerraform(this._repeatEndTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repeat_start_time: {
        value: cdktf.stringToHclTerraform(this._repeatStartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repeat_type: {
        value: cdktf.stringToHclTerraform(this._repeatType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_time: {
        value: cdktf.numberToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: cloudFirewallNatFirewallControlPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudFirewallNatFirewallControlPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
