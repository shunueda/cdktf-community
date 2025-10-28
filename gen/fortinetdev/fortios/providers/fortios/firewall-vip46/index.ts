// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FirewallVip46Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#arp_reply FirewallVip46#arp_reply}
  */
  readonly arpReply?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#color FirewallVip46#color}
  */
  readonly color?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#comment FirewallVip46#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#dynamic_sort_subtable FirewallVip46#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#extip FirewallVip46#extip}
  */
  readonly extip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#extport FirewallVip46#extport}
  */
  readonly extport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#fosid FirewallVip46#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#get_all_tables FirewallVip46#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#id FirewallVip46#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#ldb_method FirewallVip46#ldb_method}
  */
  readonly ldbMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#mappedip FirewallVip46#mappedip}
  */
  readonly mappedip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#mappedport FirewallVip46#mappedport}
  */
  readonly mappedport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#name FirewallVip46#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#portforward FirewallVip46#portforward}
  */
  readonly portforward?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#protocol FirewallVip46#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#server_type FirewallVip46#server_type}
  */
  readonly serverType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#type FirewallVip46#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#uuid FirewallVip46#uuid}
  */
  readonly uuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#vdomparam FirewallVip46#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#monitor FirewallVip46#monitor}
  */
  readonly monitor?: FirewallVip46Monitor[] | cdktf.IResolvable;
  /**
  * realservers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#realservers FirewallVip46#realservers}
  */
  readonly realservers?: FirewallVip46Realservers[] | cdktf.IResolvable;
  /**
  * src_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#src_filter FirewallVip46#src_filter}
  */
  readonly srcFilter?: FirewallVip46SrcFilter[] | cdktf.IResolvable;
  /**
  * srcintf_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#srcintf_filter FirewallVip46#srcintf_filter}
  */
  readonly srcintfFilter?: FirewallVip46SrcintfFilter[] | cdktf.IResolvable;
}
export interface FirewallVip46Monitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#name FirewallVip46#name}
  */
  readonly name?: string;
}

export function firewallVip46MonitorToTerraform(struct?: FirewallVip46Monitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function firewallVip46MonitorToHclTerraform(struct?: FirewallVip46Monitor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallVip46MonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirewallVip46Monitor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallVip46Monitor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class FirewallVip46MonitorList extends cdktf.ComplexList {
  public internalValue? : FirewallVip46Monitor[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FirewallVip46MonitorOutputReference {
    return new FirewallVip46MonitorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallVip46Realservers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#client_ip FirewallVip46#client_ip}
  */
  readonly clientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#healthcheck FirewallVip46#healthcheck}
  */
  readonly healthcheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#holddown_interval FirewallVip46#holddown_interval}
  */
  readonly holddownInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#id FirewallVip46#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#ip FirewallVip46#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#max_connections FirewallVip46#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#monitor FirewallVip46#monitor}
  */
  readonly monitor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#port FirewallVip46#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#status FirewallVip46#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#weight FirewallVip46#weight}
  */
  readonly weight?: number;
}

export function firewallVip46RealserversToTerraform(struct?: FirewallVip46Realservers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_ip: cdktf.stringToTerraform(struct!.clientIp),
    healthcheck: cdktf.stringToTerraform(struct!.healthcheck),
    holddown_interval: cdktf.numberToTerraform(struct!.holddownInterval),
    id: cdktf.numberToTerraform(struct!.id),
    ip: cdktf.stringToTerraform(struct!.ip),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    monitor: cdktf.stringToTerraform(struct!.monitor),
    port: cdktf.numberToTerraform(struct!.port),
    status: cdktf.stringToTerraform(struct!.status),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function firewallVip46RealserversToHclTerraform(struct?: FirewallVip46Realservers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_ip: {
      value: cdktf.stringToHclTerraform(struct!.clientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    healthcheck: {
      value: cdktf.stringToHclTerraform(struct!.healthcheck),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    holddown_interval: {
      value: cdktf.numberToHclTerraform(struct!.holddownInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor: {
      value: cdktf.stringToHclTerraform(struct!.monitor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallVip46RealserversOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirewallVip46Realservers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp;
    }
    if (this._healthcheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthcheck = this._healthcheck;
    }
    if (this._holddownInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.holddownInterval = this._holddownInterval;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._monitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitor = this._monitor;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallVip46Realservers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientIp = undefined;
      this._healthcheck = undefined;
      this._holddownInterval = undefined;
      this._id = undefined;
      this._ip = undefined;
      this._maxConnections = undefined;
      this._monitor = undefined;
      this._port = undefined;
      this._status = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientIp = value.clientIp;
      this._healthcheck = value.healthcheck;
      this._holddownInterval = value.holddownInterval;
      this._id = value.id;
      this._ip = value.ip;
      this._maxConnections = value.maxConnections;
      this._monitor = value.monitor;
      this._port = value.port;
      this._status = value.status;
      this._weight = value.weight;
    }
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp?: string; 
  public get clientIp() {
    return this.getStringAttribute('client_ip');
  }
  public set clientIp(value: string) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // healthcheck - computed: true, optional: true, required: false
  private _healthcheck?: string; 
  public get healthcheck() {
    return this.getStringAttribute('healthcheck');
  }
  public set healthcheck(value: string) {
    this._healthcheck = value;
  }
  public resetHealthcheck() {
    this._healthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthcheckInput() {
    return this._healthcheck;
  }

  // holddown_interval - computed: true, optional: true, required: false
  private _holddownInterval?: number; 
  public get holddownInterval() {
    return this.getNumberAttribute('holddown_interval');
  }
  public set holddownInterval(value: number) {
    this._holddownInterval = value;
  }
  public resetHolddownInterval() {
    this._holddownInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holddownIntervalInput() {
    return this._holddownInterval;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class FirewallVip46RealserversList extends cdktf.ComplexList {
  public internalValue? : FirewallVip46Realservers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FirewallVip46RealserversOutputReference {
    return new FirewallVip46RealserversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallVip46SrcFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#range FirewallVip46#range}
  */
  readonly range?: string;
}

export function firewallVip46SrcFilterToTerraform(struct?: FirewallVip46SrcFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: cdktf.stringToTerraform(struct!.range),
  }
}


export function firewallVip46SrcFilterToHclTerraform(struct?: FirewallVip46SrcFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range: {
      value: cdktf.stringToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallVip46SrcFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirewallVip46SrcFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallVip46SrcFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._range = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._range = value.range;
    }
  }

  // range - computed: false, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }
}

export class FirewallVip46SrcFilterList extends cdktf.ComplexList {
  public internalValue? : FirewallVip46SrcFilter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FirewallVip46SrcFilterOutputReference {
    return new FirewallVip46SrcFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FirewallVip46SrcintfFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#interface_name FirewallVip46#interface_name}
  */
  readonly interfaceName?: string;
}

export function firewallVip46SrcintfFilterToTerraform(struct?: FirewallVip46SrcintfFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
  }
}


export function firewallVip46SrcintfFilterToHclTerraform(struct?: FirewallVip46SrcintfFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FirewallVip46SrcintfFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): FirewallVip46SrcintfFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FirewallVip46SrcintfFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
    }
  }

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }
}

export class FirewallVip46SrcintfFilterList extends cdktf.ComplexList {
  public internalValue? : FirewallVip46SrcintfFilter[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): FirewallVip46SrcintfFilterOutputReference {
    return new FirewallVip46SrcintfFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46 fortios_firewall_vip46}
*/
export class FirewallVip46 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_firewall_vip46";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FirewallVip46 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FirewallVip46 to import
  * @param importFromId The id of the existing FirewallVip46 that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FirewallVip46 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_firewall_vip46", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/firewall_vip46 fortios_firewall_vip46} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FirewallVip46Config
  */
  public constructor(scope: Construct, id: string, config: FirewallVip46Config) {
    super(scope, id, {
      terraformResourceType: 'fortios_firewall_vip46',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arpReply = config.arpReply;
    this._color = config.color;
    this._comment = config.comment;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._extip = config.extip;
    this._extport = config.extport;
    this._fosid = config.fosid;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._ldbMethod = config.ldbMethod;
    this._mappedip = config.mappedip;
    this._mappedport = config.mappedport;
    this._name = config.name;
    this._portforward = config.portforward;
    this._protocol = config.protocol;
    this._serverType = config.serverType;
    this._type = config.type;
    this._uuid = config.uuid;
    this._vdomparam = config.vdomparam;
    this._monitor.internalValue = config.monitor;
    this._realservers.internalValue = config.realservers;
    this._srcFilter.internalValue = config.srcFilter;
    this._srcintfFilter.internalValue = config.srcintfFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arp_reply - computed: true, optional: true, required: false
  private _arpReply?: string; 
  public get arpReply() {
    return this.getStringAttribute('arp_reply');
  }
  public set arpReply(value: string) {
    this._arpReply = value;
  }
  public resetArpReply() {
    this._arpReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpReplyInput() {
    return this._arpReply;
  }

  // color - computed: false, optional: true, required: false
  private _color?: number; 
  public get color() {
    return this.getNumberAttribute('color');
  }
  public set color(value: number) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // extip - computed: false, optional: false, required: true
  private _extip?: string; 
  public get extip() {
    return this.getStringAttribute('extip');
  }
  public set extip(value: string) {
    this._extip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extipInput() {
    return this._extip;
  }

  // extport - computed: false, optional: true, required: false
  private _extport?: string; 
  public get extport() {
    return this.getStringAttribute('extport');
  }
  public set extport(value: string) {
    this._extport = value;
  }
  public resetExtport() {
    this._extport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extportInput() {
    return this._extport;
  }

  // fosid - computed: true, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // ldb_method - computed: true, optional: true, required: false
  private _ldbMethod?: string; 
  public get ldbMethod() {
    return this.getStringAttribute('ldb_method');
  }
  public set ldbMethod(value: string) {
    this._ldbMethod = value;
  }
  public resetLdbMethod() {
    this._ldbMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldbMethodInput() {
    return this._ldbMethod;
  }

  // mappedip - computed: false, optional: false, required: true
  private _mappedip?: string; 
  public get mappedip() {
    return this.getStringAttribute('mappedip');
  }
  public set mappedip(value: string) {
    this._mappedip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedipInput() {
    return this._mappedip;
  }

  // mappedport - computed: false, optional: true, required: false
  private _mappedport?: string; 
  public get mappedport() {
    return this.getStringAttribute('mappedport');
  }
  public set mappedport(value: string) {
    this._mappedport = value;
  }
  public resetMappedport() {
    this._mappedport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedportInput() {
    return this._mappedport;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // portforward - computed: true, optional: true, required: false
  private _portforward?: string; 
  public get portforward() {
    return this.getStringAttribute('portforward');
  }
  public set portforward(value: string) {
    this._portforward = value;
  }
  public resetPortforward() {
    this._portforward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portforwardInput() {
    return this._portforward;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // server_type - computed: false, optional: true, required: false
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new FirewallVip46MonitorList(this, "monitor", true);
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: FirewallVip46Monitor[] | cdktf.IResolvable) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // realservers - computed: false, optional: true, required: false
  private _realservers = new FirewallVip46RealserversList(this, "realservers", false);
  public get realservers() {
    return this._realservers;
  }
  public putRealservers(value: FirewallVip46Realservers[] | cdktf.IResolvable) {
    this._realservers.internalValue = value;
  }
  public resetRealservers() {
    this._realservers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realserversInput() {
    return this._realservers.internalValue;
  }

  // src_filter - computed: false, optional: true, required: false
  private _srcFilter = new FirewallVip46SrcFilterList(this, "src_filter", true);
  public get srcFilter() {
    return this._srcFilter;
  }
  public putSrcFilter(value: FirewallVip46SrcFilter[] | cdktf.IResolvable) {
    this._srcFilter.internalValue = value;
  }
  public resetSrcFilter() {
    this._srcFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterInput() {
    return this._srcFilter.internalValue;
  }

  // srcintf_filter - computed: false, optional: true, required: false
  private _srcintfFilter = new FirewallVip46SrcintfFilterList(this, "srcintf_filter", true);
  public get srcintfFilter() {
    return this._srcintfFilter;
  }
  public putSrcintfFilter(value: FirewallVip46SrcintfFilter[] | cdktf.IResolvable) {
    this._srcintfFilter.internalValue = value;
  }
  public resetSrcintfFilter() {
    this._srcintfFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcintfFilterInput() {
    return this._srcintfFilter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arp_reply: cdktf.stringToTerraform(this._arpReply),
      color: cdktf.numberToTerraform(this._color),
      comment: cdktf.stringToTerraform(this._comment),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      extip: cdktf.stringToTerraform(this._extip),
      extport: cdktf.stringToTerraform(this._extport),
      fosid: cdktf.numberToTerraform(this._fosid),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      ldb_method: cdktf.stringToTerraform(this._ldbMethod),
      mappedip: cdktf.stringToTerraform(this._mappedip),
      mappedport: cdktf.stringToTerraform(this._mappedport),
      name: cdktf.stringToTerraform(this._name),
      portforward: cdktf.stringToTerraform(this._portforward),
      protocol: cdktf.stringToTerraform(this._protocol),
      server_type: cdktf.stringToTerraform(this._serverType),
      type: cdktf.stringToTerraform(this._type),
      uuid: cdktf.stringToTerraform(this._uuid),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      monitor: cdktf.listMapper(firewallVip46MonitorToTerraform, true)(this._monitor.internalValue),
      realservers: cdktf.listMapper(firewallVip46RealserversToTerraform, true)(this._realservers.internalValue),
      src_filter: cdktf.listMapper(firewallVip46SrcFilterToTerraform, true)(this._srcFilter.internalValue),
      srcintf_filter: cdktf.listMapper(firewallVip46SrcintfFilterToTerraform, true)(this._srcintfFilter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arp_reply: {
        value: cdktf.stringToHclTerraform(this._arpReply),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color: {
        value: cdktf.numberToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extip: {
        value: cdktf.stringToHclTerraform(this._extip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extport: {
        value: cdktf.stringToHclTerraform(this._extport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      ldb_method: {
        value: cdktf.stringToHclTerraform(this._ldbMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mappedip: {
        value: cdktf.stringToHclTerraform(this._mappedip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mappedport: {
        value: cdktf.stringToHclTerraform(this._mappedport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portforward: {
        value: cdktf.stringToHclTerraform(this._portforward),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_type: {
        value: cdktf.stringToHclTerraform(this._serverType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor: {
        value: cdktf.listMapperHcl(firewallVip46MonitorToHclTerraform, true)(this._monitor.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallVip46MonitorList",
      },
      realservers: {
        value: cdktf.listMapperHcl(firewallVip46RealserversToHclTerraform, true)(this._realservers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FirewallVip46RealserversList",
      },
      src_filter: {
        value: cdktf.listMapperHcl(firewallVip46SrcFilterToHclTerraform, true)(this._srcFilter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallVip46SrcFilterList",
      },
      srcintf_filter: {
        value: cdktf.listMapperHcl(firewallVip46SrcintfFilterToHclTerraform, true)(this._srcintfFilter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FirewallVip46SrcintfFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
